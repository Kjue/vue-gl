import { VglObject3dWithMaterialAndGeometry } from '../mixins.js';
import { Line } from '../three.js';
import { string } from '../validators.js';

/**
 * A continuous line component,
 * corresponding [THREE.Line](https://threejs.org/docs/index.html#api/objects/Line).
 *
 * Properties of [VglObject3d](vgl-object3d) are also available as mixin.
 */

export default {
  mixins: [VglObject3dWithMaterialAndGeometry],
  props: {
    /** Name of the geometry, representing the line segment(s). */
    geometry: string,
    /** Name of the material for the line. */
    material: string,
  },
  computed: {
    inst: () => new Line(),
  },
  methods: {
    computeLineDistances() {
      if (this.inst.material.isLineDashedMaterial) this.inst.computeLineDistances();
    },
  },
  created() { this.vglNamespace.beforeRender.push(this.computeLineDistances); },
  beforeDestroy() {
    const { vglNamespace: { beforeRender }, computeLineDistances } = this;
    beforeRender.splice(beforeRender.indexOf(computeLineDistances), 1);
  },
};
