import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import { router } from "./nav/router";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dropzone/styles.css";
import { MatchProvider } from './context/MatchContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <MatchProvider>
        <RouterProvider router={router} />
      </MatchProvider>
    </MantineProvider>
  </StrictMode>
)
