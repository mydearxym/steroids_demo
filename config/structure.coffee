# Read more about app structure at http://docs.appgyver.com

module.exports =

#  rootView:
#    location: "superhero#index"

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "首页"
      id: "index"
      location: "example#getting-started" # Supersonic module#view type navigation
    }
    {
      title: "统计"
      id: "settings"
      location: "example#settings"
    }

#    {
#      title: "Geolocation"
#      id: "geolocation"
#      location: "geolocation#index"
#    }

    {
      title: "控制"
      id: "internet"
      location: "superhero#index" # URLs are supported!
    }
  ]

  # rootView:
  #   location: "example#getting-started"

  preloads: [
    {
      id: "learn-more"
      location: "example#learn-more"
    }
    {
      id: "using-the-scanner"
      location: "example#using-the-scanner"
    }
  ]

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
