import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { vec3 } from 'gl-matrix';
import { projectsData } from '../data/projectsData';

function FloatingItem({ project, position }) {
    return (
        <group position={position}>
            <mesh>
                <sphereGeometry args={[0.4, 16, 16]} />
                <meshStandardMaterial color={project.handled ? 'gold' : 'silver'} />
            </mesh>
            <Html center distanceFactor={6}>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="face-title active"
                    style={{
                        whiteSpace: 'nowrap',
                        fontWeight: 'bold',
                        color: '#fff',
                        textShadow: '0 0 6px #000'
                    }}
                >
                    {project.title}
                </a>
            </Html>
        </group>
    );
}

// ✅ Moved useFrame inside a valid R3F render tree
function RotatingGroup({ positions }) {
    const groupRef = useRef();
    useFrame(() => {
        if (groupRef.current) groupRef.current.rotation.y += 0.002;
    });

    return (
        <group ref={groupRef}>
            {projectsData.map((p, i) => (
                <FloatingItem
                    key={i}
                    project={p}
                    position={positions[i] ? Array.from(positions[i]) : [0, 0, 0]}
                />

            ))}
        </group>
    );
}

function ProjectsCarousel3D() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const total = projectsData.length;
        const pts = [];
        const thetaStep = Math.PI * (3 - Math.sqrt(5));
        for (let i = 0; i < total; i++) {
            const y = 1 - (i / (total - 1)) * 2;
            const radius = Math.sqrt(1 - y * y);
            const theta = thetaStep * i;
            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;
            pts.push(vec3.fromValues(x * 5, y * 5, z * 5));
        }
        setPositions(pts);
    }, []);

    return (
        <div style={{ width: '100%', height: '600px' }}>
            <Canvas camera={{ position: [0, 0, 12] }}>
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} />
                <RotatingGroup positions={positions} />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}

export default ProjectsCarousel3D;
