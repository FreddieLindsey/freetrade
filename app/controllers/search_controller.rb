require 'active_support'

class SearchController < ApplicationController
  def indices
    render  json: { indices: [ 'All', 'Apparel', 'Automotive', 'Baby', 'Beauty', 'Blended', 'Books', 'Classical', 'DigitalMusic', 'DVD', 'Electronics', 'ForeignBooks', 'GourmetFood', 'Grocery', 'HealthPersonalCare', 'Hobbies', 'HomeGarden', 'HomeImprovement', 'Industrial', 'Jewelry', 'KindleStore', 'Kitchen', 'Lighting', 'Magazines', 'Merchants', 'Miscellaneous', 'MP3Downloads', 'Music', 'MusicalInstruments', 'MusicTracks', 'OfficeProducts', 'OutdoorLiving', 'Outlet', 'PCHardware', 'PetSupplies', 'Photo', 'Shoes', 'SilverMerchants', 'Software', 'SoftwareVideoGames', 'SportingGoods', 'Tools', 'Toys', 'UnboxVideo', 'VHS', 'Video', 'VideoGames', 'Watches', 'Wireless' 'WirelessAccessories' ] },
            status: :ok,
            content_type: 'text/json'
  end

  def search
    if !params[:query]
      render  json: {},
              status: :bad_request,
              content_type: 'text/json'
      return
    end

    awspaa = Vacuum.new 'GB'
    awspaa.configure(
      aws_access_key_id: ENV['AWS_ACCESS_ID'],
      aws_secret_access_key: ENV['AWS_ACCESS_SECRET'],
      associate_tag: 'tag'
    )

    query = {
      'Keywords' => "#{params[:query]}",
      'SearchIndex' => "#{params[:index]}"
    }

    response = awspaa.item_search( query: query )
    response = response.to_h
    items = response['ItemSearchResponse']['Items']['Item']

    results = []
    items.each do |i|
      item = {}
      item['ASIN'] = i['ASIN']
      item['title'] = i['ItemAttributes']['Title']
      results.push(item)
    end

    render  json: { items: results },
            status: :ok,
            content_type: 'text/json'
  end
end
