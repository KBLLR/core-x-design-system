A label pinned to a point in a 3D scene by a 1px leader line.

**You provide:** `name`, optionally `type` and `value`, and `anchor`: where the point sits relative to the label's bottom-left corner. Your scene code projects the 3D point and positions the label.

- At rest: dashed border, translucent fill, line at half strength.
- `selected`: solid accent border, opaque fill, full line, and the children appear. Usually a `Graph`.
- `entity` scopes it to an ecosystem entity, so the value and border take that entity's hex. Only for content that belongs to that entity.
- Keep the label clear of the scene's centre and let pointer events through everywhere else: the overlay must never block orbit controls.

`type` is mono uppercase; `value` is tabular, so a live reading does not shift the box.
