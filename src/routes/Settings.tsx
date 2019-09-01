import React from "react";
import { RouteComponentProps } from "@reach/router";
import { useSelector } from "react-redux";
import { getExportableState } from "../store";
import {
  ViewContainer,
  Title,
  Headline,
  Body,
  Grid,
  TextArea
} from "../components";

interface Props extends RouteComponentProps {}

export const Settings: React.FC<Props> = () => {
  const exportableState = useSelector(getExportableState);

  const onExportFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    event.target.select();
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

      <Headline mb={1}>Exportable data</Headline>
      <Body mb={3}>You can copy and paste this to export all the data.</Body>
      <TextArea
        defaultValue={JSON.stringify(exportableState, null, 2)}
        rows={10}
        fontSize={0}
        fontFamily="mono"
        color="textAlt"
        bg="bgAlt"
        p={3}
        onFocus={onExportFocus}
        readOnly
      />
    </ViewContainer>
  );
};
