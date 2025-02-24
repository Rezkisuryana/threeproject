/* eslint-disable react/jsx-pascal-case */
import React, { Suspense } from "react";
import "./styles.css";
import styled from "styled-components";

import Background from "./components/Background";
import TextSection from "./components/TextSection";
import MiniCooper from "./components/MiniCooper";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />
      <Canvas className="canvas">
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense>
          <MiniCooper/>
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 500px;
  }
`;
