
declare module 'gsap' {
  export function registerPlugin(...args: any[]): void;
  export function timeline(config?: any): any;
  export function fromTo(targets: any, fromVars: any, toVars: any): any;
  export function to(targets: any, vars: any): any;
}

declare module 'gsap/ScrollTrigger' {
  const ScrollTrigger: any;
  export default ScrollTrigger;
}

declare module '@studio-freight/lenis' {
  export default class Lenis {
    constructor(options?: any);
    raf(time: number): void;
    destroy(): void;
  }
}

declare module 'three' {
  export class Scene {
    add(object: any): void;
  }
  
  export class PerspectiveCamera {
    constructor(fov: number, aspect: number, near: number, far: number);
    position: Vector3;
    aspect: number;
    updateProjectionMatrix(): void;
  }
  
  export class WebGLRenderer {
    constructor(options?: any);
    setSize(width: number, height: number): void;
    setPixelRatio(ratio: number): void;
    render(scene: Scene, camera: PerspectiveCamera): void;
    domElement: HTMLCanvasElement;
    dispose(): void;
  }
  
  export class BufferGeometry {
    setAttribute(name: string, attribute: BufferAttribute): void;
    dispose(): void;
  }
  
  export class BufferAttribute {
    constructor(array: Float32Array, itemSize: number);
  }
  
  export class PointsMaterial {
    constructor(options?: any);
    dispose(): void;
  }
  
  export class Points {
    constructor(geometry: BufferGeometry, material: PointsMaterial);
    rotation: {
      x: number;
      y: number;
    };
    geometry: BufferGeometry;
    material: PointsMaterial;
  }
  
  export class Material {
    dispose(): void;
  }
  
  export class Vector3 {
    x: number;
    y: number;
    z: number;
  }
  
  export class AmbientLight {
    constructor(color: number, intensity?: number);
  }
  
  export class DirectionalLight {
    constructor(color: number, intensity?: number);
    position: {
      set(x: number, y: number, z: number): void;
    };
  }
}
