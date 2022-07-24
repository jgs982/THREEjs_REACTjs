import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const Scene = () => {

    const mountRef = useRef(null)

    useEffect(() => {
        const currentMount = mountRef.current

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            25,
            currentMount.clientWidth / currentMount.clientHeight,
            0.1,
            1000
        )
        camera.position.z = 4
        scene.add(camera)

        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(
            currentMount.clientWidth,
            currentMount.clientHeight
        )

        currentMount.appendChild(renderer.domElement)

        const cube = new THREE.Mesh(
            new THREE.BoxBufferGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial()
        )
        scene.add(cube)

        renderer.render(scene, camera)

        return () => {
            currentMount.removeChild(renderer.domElement)
        }

    }, [])

    return (
        <div             
            ref={mountRef}
            style={{
                width: 400,
                height: 400
            }}
        >
            
        </div>
    )
}

export default Scene