import { Box, Title, UnstyledButton } from "@mantine/core"
import { Popcorn } from "@phosphor-icons/react"
import { Outlet } from "react-router-dom"
import { useRouter } from "@/hooks";
import { PageSpinner } from "@/components";
import React from "react";

export const DefaultLayout: React.FC = () => {
  const { routes } = useRouter();
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem", backgroundColor: "#00506E", color: "white" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
            <Title sx={{ letterSpacing: "0.20rem" }} order={1}>ReelSpot</Title>
            <Popcorn size={32} />
          </Box>
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <UnstyledButton onClick={() => routes.home.go()} sx={{ color: "white" }}><Title order={4}>Home</Title></UnstyledButton>
          <UnstyledButton onClick={() => routes.search.go()} sx={{ color: "white" }}><Title order={4}>Search</Title></UnstyledButton>
          </Box>
        </Box>
        <React.Suspense fallback={<PageSpinner />}>
          <Outlet />
        </React.Suspense>
      </Box>
    </>
  )
}