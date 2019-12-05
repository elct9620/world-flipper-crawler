# frozen_string_literal: true

require 'downloader'

module Utils
  # Object can download from `.uri`
  module Downloadable
    # @since 0.1.0
    # @api private
    def self.included(base)
      base.extend ClassMethods
    end

    # :nodoc:
    module ClassMethods
      # The filename
      #
      # @param name [String] the output filename
      # @return [String] the filename
      #
      # @since 0.1.0
      # @api private
      def filename(name = nil)
        return @filename || "#{name}.zip" if name.nil?

        @filename = name
      end

      # Download from specify uri
      #
      # @since 0.1.0
      # @api private
      def download!
        Downloader.new(uri).save(filename)
      end
    end
  end
end
