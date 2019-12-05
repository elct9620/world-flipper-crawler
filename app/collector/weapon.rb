# frozen_string_literal: true

require 'source/spreadsheet/html'

module Collector
  class Weapon
    include Source::Spreadsheet::HTML
    RANK_CHAR = '☆'
    ROW_RULE = /<tr[^>]*>.*?<\/tr>/.freeze
    COLUMN_RULE = /<td[^>]*>(.*?)<\/td>/.freeze
    IMAEG_SRC_RULE = /src="([^"]*)"/.freeze
    LINEFEED = '<br>'
    HTML_TAG_RULE = /<[^>]*>/.freeze

    source '1rpdOVhqE8NBQx23zUMq-KRWAU2LCwg6toPXj0xzqgD4'

    # :nodoc:
    def desire_file?(name)
      name.start_with?(RANK_CHAR)
    end

    private

    # :nodoc:
    def parse(name, entry)
      @items ||= []
      rank = name.gsub(RANK_CHAR, '').to_i
      to_row(entry)
        .map { |row| row.scan(COLUMN_RULE).flatten }
        .reject { |row| empty?(row) }
        .each { |row| items.push create(rank, row) }
    end

    def empty?(row)
      row.reduce(true) { |prev, cell| prev && cell == '' }
    end

    def to_row(entry)
      entry
        .get_input_stream
        .read
        .force_encoding('UTF-8')
        .scan(ROW_RULE)
        .drop(2)
    end

    # :nodoc:
    def create(rank, row)
      {
        rank: rank,
        icon: row[0][IMAEG_SRC_RULE, 1],
        name: format_name(row[1]),
        element: row[2],
        effects: format_multilne_cell(row[4]),
        max_effects: format_multilne_cell(row[5]),
        hp: row[6],
        atk: row[7],
        max_hp: row[8],
        max_atk: row[9],
        sources: format_multilne_cell(row[10])
      }
    end

    def format_name(name)
      %i[ja zh]
        .zip(format_multilne_cell(name)).to_h
    end

    def format_multilne_cell(description)
      description
        .split(LINEFEED)
        .map { |line| line.gsub(HTML_TAG_RULE, '') }
    end
  end
end
