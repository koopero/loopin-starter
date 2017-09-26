
# Window

``` control
path: loopin/window/fullscreen
hide: all
title: fullscreen
type: trigger
toggle: true
```

``` control
path: loopin/window/cursor
hide: all
title: cursor
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

  buffer:
    options:
      - example_planet
```

# Recorder

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
    max: 3000
    precision: 0
    pow: 2.2


  duration:
    type: slider
    min: 0.25
    max: 60
    unit: s

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
