/*
 * © 2023 Thoughtworks, Inc.
 */

import { COMPUTE_PROCESSOR_TYPES } from '@cloud-carbon-footprint/core'

export const SPECIFICATION_FAMILY_COMPUTE_PROCESSOR_MAPPING: {
  [series: string]: string[]
} = {
  'ecs.g8ae': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN],
  'ecs.g7se': [COMPUTE_PROCESSOR_TYPES.ICELAKE],
  'ecs.g7a': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN],
  'ecs.g7': [COMPUTE_PROCESSOR_TYPES.ICELAKE],
  'ecs.g7t': [COMPUTE_PROCESSOR_TYPES.ICELAKE],
  'ecs.g7nex': [COMPUTE_PROCESSOR_TYPES.ICELAKE],
  'ecs.g6t': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'ecs.g6e': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'ecs.g6': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'ecs.s6': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
}

export const GPU_VIRTUAL_MACHINE_TYPE_PROCESSOR_MAPPING: {
  [series: string]: string[]
} = {
  'ecs.sgn7i': [COMPUTE_PROCESSOR_TYPES.NVIDIA_A10G],
  'ecs.gn7r': [COMPUTE_PROCESSOR_TYPES.NVIDIA_A10G],
}
