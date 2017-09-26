
# Window

Loopin is designed to complete own the host machine. Therefore, we can remotely
control parameters of the application's window.

``` control
path: loopin/window/fullscreen
hide: all
title: fullscreen
type: trigger
toggle: true
```

``` control
path: loopin/osd/enabled
hide: all
title: OSD
type: trigger
toggle: true
```

## Snapshot

The `snapshot` utility takes quick screenshots of a given buffer. They are saved to [./data/snap/](/loopin/file/data/snap/). This utility is implemented by [./node/logic/snapshot.js](/loopin/file//node/logic/snapshot.js)

``` control
path: logic/snapshot
subs:
  snap:
    type: trigger
    title: Snap
    hide: all

  extension:
    options:
      - .jpg
      - .png

  # You will need to keep these options
  # updated in your application.
  buffer:
    options:
      - example_planet
```

## Recorder

The `recorder` utility 'renders' a buffer as a sequence of image files, then uses **ffmpeg** to convert them into an mp4 file. In doing so, the clock will be slowed to render each frame precisely.

Results are saved to [./data/recorder/](/loopin/file/data/recorder/).

``` control
path: logic/recorder
subs:
  start:
    type: trigger

  rate:
    options: [ 8, 15, 30, 60 ]

  count:
    type: slider
    min: 30
    max: 300
    precision: 0
    pow: 2.2

  buffer:
    options:
      - example_planet
```


## OSD

The [OSD](https://loopin.tech/ofxLoopin-osd.html) is the ugly white-on-black glob of text in the top-left of every Loopin window, by default. Disable it here:

``` control
path: loopin/osd/enabled
type: trigger
toggle: true
```

You can also jam in custom text:

``` control
path: loopin/osd/text
type: text
size: 54
```


# Endpoints

**Loopin**, when combined with the [loopin-server](https://github.com/koopero/loopin-server) module, is a graphics engine with a webserver built in. Many of its internals are available as RESTful endpoints.

## /loopin/buffer/*

We can see any image buffer with Loopin by accessing the */loopin/buffer/\** endpoint.

* [example_planet](/loopin/buffer/example_planet.jpg)
* [example_earth](/loopin/buffer/example_earth.jpg)


## /loopin/read

We can see the entire state of the Loopin engine by examining the [/loopin/read/](/loopin/read/) endpoint. *Warning: Big mass of JSON!*

We can also read a small subset of the state, such as [/loopin/read/render/example_planet](/loopin/read/render/example_planet), which
will show the parameters of the **example_planet** demo.
