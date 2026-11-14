Says where a number came from: `fresh` · `stale` · `partial` · `failed` · `missing`.

**You provide:** `status`, and always `detail` (the tooltip: which job, which file, what went wrong).

- `fresh`: written by a run that succeeded, recently.
- `stale`: real data, older than the last relevant job. Pass `age` ("14m ago").
- `partial`: some inputs succeeded, some did not.
- `failed`: the producing job failed. Withhold the figures it would have set.
- `missing`: no artifact at all. Omit the block rather than render zeros.

Every aggregate carries one. Never silent, never a percentage.
