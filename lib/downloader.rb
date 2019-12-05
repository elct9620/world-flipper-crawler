# frozen_string_literal: true

require 'net/http'

# Download specify file
class Downloader
  # :nodoc:
  def initialize(uri)
    @uri = uri
  end

  def save(name)
    File.write(name, Net::HTTP.get(@uri))
  end
end
