# frozen_string_literal: true

require 'rubygems'
require 'bundler'

Bundler.require

ROOT_PATH = File.dirname(File.absolute_path(__FILE__))
$LOAD_PATH.unshift("#{ROOT_PATH}/lib")
$LOAD_PATH.unshift("#{ROOT_PATH}/app")
