# frozen_string_literal: true

require 'utils/downloadable'

module Source
  module Spreadsheet
    # The data source from Google Spreadsheet via HTML
    module HTML
      # @since 0.1.0
      # @api private
      def self.included(base)
        base.class_eval do
          include Enumerable
          include Utils::Downloadable
          extend ClassMethods

          filename "tmp/#{base.name.split('::').last}.zip"
        end
      end

      # Process the HTML
      #
      # @since 0.1.0
      # @api private
      def process
        self.class.download!
        Zip::File.open(self.class.filename) do |zip_file|
          zip_file.each do |entry|
            name = entry.name.force_encoding('UTF-8')
            next unless desire_file?(name)

            parse name, entry
          end
        end
      end

      # Return the items
      #
      # @return [Array<Hash>] the result items
      #
      # @since 0.1.0
      # @api private
      def items
        process if @items.nil?

        @items
      end

      # Iterate items
      #
      # @param block [Proc] the block
      #
      # @since 0.1.0
      # @api private
      def each(&block)
        items.each(&block)
      end

      # :nodoc:
      module ClassMethods
        BASE_URL = 'https://docs.google.com/spreadsheets/u/1/d/%<source>s/export?format=zip'

        # Set source
        #
        # @param source [String|NilClass] the spreadsheet id
        # @return [String|NilClass] the spreadsheet id
        #
        # @since 0.1.0
        # @api private
        def source(source = nil)
          return @source if source.nil?

          @source = source
        end

        # Get the source uri
        #
        # @return [URI] the uri of the source
        #
        # @since 0.1.0
        # @api private
        def uri
          @uri ||= URI(format(BASE_URL, source: @source))
        end
      end
    end
  end
end
