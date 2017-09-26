First, see the inputs to the system.

``` control
# This is the most useful control in the system,
# the ability to choose which buffer in shown on
# screen. It is recommended to copy-pasta this
# control to all control pages, with options
# relevant to your application.

path: loopin/show/buffer
options:
  - example_planet
  - example_lightmap
  - example_earth
  - example_moon
  - example_jupiter
```



``` control
path: loopin/show/filter
options:
  - linear
  - nearest
```

## Planet

``` control
path: loopin/render/example_planet/src/buffer
options:
  - example_earth
  - example_moon
  - example_jupiter
```

``` control
path: loopin/mesh/example_sphere/sphere
subs:
  rows:
    type: float
    min: 3
    max: 50
    digits: 0
  cols:
    type: float
    min: 3
    max: 50
    digits: 0
```

## Clock
``` control
path: loopin/render/example_planet/clock
subs:
  speed:
    type: float
    min: 0.00001157407381
    max: 300
    pow: 3
    digits: 3
    unit: 'rpm'
```

## Motion Blur
``` control
path: loopin/render/example_planet/float/planetBlurAmount
type: float
min: 0
max: 10
pow: 2
digits: 3
unit: '%'
markers:
  - 0.5
  - 1
```

## Camera

``` control
path: loopin/camera/example_camera
subs:
  distance:
    type: float
    min: 0
    max: 3

  fov:
    type: float
    min: 30
    max: 170
    unit: °
    digits: 3
    pow: 2.4

  zoom:
    type: float
    min: -2
    max: 2
    markers:
      - -1
      - 0
      - 1
    digits: 3

  yaw:
    type: float
    min: -120
    max: 120
    unit: deg
    markers:
      - -45
      - 0
      - 45

  pitch:
    type: float
    min: -49.5
    max: 49.5
    unit: deg

  roll:
    type: float
    min: -49.5
    max: 49.5
    unit: deg
```


## Lighting


``` control
path: loopin/render/example_planet/float
subs:
  lightContrast:
    type: float
    min: 0.25
    max: 4
    pow: 2

  lightPitch:
    type: float
    min: -90
    max: 90

  lightGamma:
    type: float
    min: 0.1
    max: 3

  lightGain:
    type: float
    min: 0.25
    max: 4
    pow: 2
```

``` control
path: loopin/render/example_planet/texture/lightmap
subs:
  buffer:
    options:
      - white
      - example_lightmap
  filter:
    options:
      - linear
      - nearest
```

Finally, `example_lightmap` itself.

``` control
path: loopin/pixels/example_lightmap/data
type: pixels
cols: 8
rows: 1
channels: rgb
```

The input and output of the pixels `pixels` operator is just text, so we can edit it directly or paste it into presets.

``` control
path: loopin/pixels/example_lightmap/data
type: text
size: 30
```
