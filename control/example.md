``` control
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
path: loopin/render/example_planet/float/planetSpeed
type: float
min: 0.00001157407381
max: 300
pow: 3
digits: 3
unit: 'rpm'
```

``` control
path: loopin/render/example_planet/float/planetBlurAmount
type: float
min: 0
max: 10
pow: 3
digits: 3
unit: '%'
```

## Projection

### Render
``` control
path: loopin/render/example_planet/passes
type: float
digits: 0
min: 1
max: 64
pow: 2
```

### Camera

``` control
path: loopin/camera/example_camera
subs:
  zoom:
    type: float
    min: -2
    max: 2
    markers:
      - -1
      - 0
      - 1
    digits: 3

  distance:
    type: float
    min: -1
    max: 4
    markers:
      - 0
      - 1

  fov:
    type: float
    min: 4
    max: 170
    markers:
      - 15
      - 45
      - 90
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

### Mesh
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


``` control
path: loopin/pixels/example_lightmap/data
type: pixels
cols: 8
rows: 1
channels: rgb
```


### Lighting
``` control
path: loopin/render/example_planet/float
subs:
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
