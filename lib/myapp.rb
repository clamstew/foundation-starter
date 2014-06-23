require "yaml"

module MyApp
  class Jokes
    attr_reader :jokes
    def initialize
      @jokes = YAML.load_file('lib/jokes.yml')
    end
  end
end