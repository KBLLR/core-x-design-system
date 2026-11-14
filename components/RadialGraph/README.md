The same series as `Graph`, wrapped around a ring. For cycles: a day, a rotation, a spectrum.

**You provide:** `value` and `range`.

- `width` is the diameter; `graphHeight` the depth of the ring the series is drawn in.
- `start` rotates the first point, in degrees clockwise from 12 o'clock.
- The latest value prints in the centre with `suffix` or `format`.
- `ghost` and `noGradient` work as on `Graph`.

Use it only when the series is cyclic and the first point follows the last. A linear series on a ring implies a continuity that is not there.
