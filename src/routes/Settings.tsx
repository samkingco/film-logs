import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { getExportableState, getActiveThemeMode, setThemeMode } from "../store";
import {
  ViewContainer,
  Title,
  Headline,
  Body,
  Grid,
  Checkbox,
  CheckboxLabel,
  TextArea,
  Divider
} from "../components";

interface Props extends RouteComponentProps {}

export const Settings: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const exportableState = useSelector(getExportableState);
  const themeMode = useSelector(getActiveThemeMode);
  const isDarkMode = themeMode === "dark";

  const onDarkModeToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isDarkMode) {
      dispatch(setThemeMode("light"));
    } else {
      dispatch(setThemeMode("dark"));
    }
  };

  return (
    <ViewContainer backLink>
      <Grid
        gridTemplateColumns="1fr max-content"
        gridGap={4}
        alignItems="start"
        mb={6}
      >
        <Title>Settings</Title>
      </Grid>

      <Grid
        gridTemplateColumns="min-content 1fr"
        gridGap={3}
        alignItems="center"
      >
        <Checkbox
          id="isDarkMode"
          type="checkbox"
          checked={isDarkMode}
          onChange={onDarkModeToggle}
        />

        <CheckboxLabel htmlFor="isDarkMode">Dark mode</CheckboxLabel>
      </Grid>

      <Divider />

      <Headline mb={1}>Exportable data</Headline>
      <Body mb={3}>You can copy this to export all the data for now.</Body>
      <TextArea
        defaultValue={JSON.stringify(exportableState, null, 2)}
        rows={20}
        fontSize={0}
        fontFamily="mono"
        color="textAlt"
        bg="bgAlt"
        p={3}
        readOnly
      />
    </ViewContainer>
  );
};
