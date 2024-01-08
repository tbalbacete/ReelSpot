import {
  Box,
  Burger,
  Popover,
  Title,
  UnstyledButton,
  Flex,
  Divider,
  NavLink,
} from "@mantine/core";
import { House, Popcorn, Question } from "@phosphor-icons/react";
import { Outlet } from "react-router-dom";
import { useRouter } from "@/hooks";
import { PageSpinner } from "@/components";
import React from "react";
import { useDisclosure } from "@mantine/hooks";

export const DefaultLayout: React.FC = () => {
  const { routes } = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
            backgroundColor: "#00506E",
            color: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5em",
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => routes.home.go()}
          >
            <Title sx={{ letterSpacing: "0.20rem" }} order={1}>
              ReelSpot
            </Title>
            <Popcorn size={32} />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              "@media (max-width: 450px)": { display: "none" },
            }}
          >
            <UnstyledButton
              onClick={() => routes.home.go()}
              sx={{ color: "white" }}
            >
              <Title order={4}>Home</Title>
            </UnstyledButton>
            <UnstyledButton
              onClick={() => routes.search.go()}
              sx={{ color: "white" }}
            >
              <Title order={4}>Search</Title>
            </UnstyledButton>
          </Box>
          <Box sx={{ "@media (min-width: 450px)": { display: "none" } }}>
            <Popover width={180} position="bottom-start">
              <Popover.Target>
                <Burger color="white" opened={opened} onClick={toggle} />
              </Popover.Target>
              <Popover.Dropdown sx={{ padding: 0 }}>
                <Flex direction="column">
                  <NavLink
                    icon={<House />}
                    onClick={() => routes.home.go()}
                    sx={{ color: "black" }}
                    label="Home"
                  ></NavLink>
                  <Divider />
                  <NavLink
                    icon={<Question />}
                    onClick={() => routes.search.go()}
                    sx={{ color: "black" }}
                    label="Search"
                  ></NavLink>
                </Flex>
              </Popover.Dropdown>
            </Popover>
          </Box>
        </Box>
        <React.Suspense fallback={<PageSpinner />}>
          <Outlet />
        </React.Suspense>
      </Box>
    </>
  );
};
