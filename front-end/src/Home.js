import React from "react";

import { Heading, Grommet, Grid, Main, Box, Paragraph } from "grommet";
import { grommet } from "grommet/themes";

const GridLayout = () => {
  return (
    <div>
      <Grid columns={["1/4", "3/4"]} areas={[["info", "info2"]]} gap="small">
        <Box background="light-5" gridArea="info">
          <Heading size="small" margin="small">
            Stay home. Save lives.
          </Heading>
          <Paragraph margin="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            mauris enim, iaculis quis turpis quis, tempor pharetra ex.
            Suspendisse enim nulla, auctor a enim ut, condimentum rutrum nisl.
            Quisque id malesuada lectus. Donec pretium sit amet turpis sed
            porttitor. In tincidunt magna sed volutpat ornare. Proin et erat sit
            amet turpis accumsan malesuada. In in nisi eu leo placerat posuere
            quis in mauris. Phasellus euismod pretium ipsum, sed auctor nunc
            ornare quis. Duis pretium risus ut tristique efficitur. Aenean
            aliquam molestie lobortis. Cras justo nunc, ornare ut cursus nec,
            imperdiet vitae sapien. Suspendisse ut dictum ante. Sed vitae cursus
            nulla. Aliquam lobortis pretium mauris, non vehicula purus malesuada
            quis. Mauris posuere vestibulum felis, non pulvinar dui congue sit
            amet. Aliquam erat volutpat. Sed id magna in magna fringilla
            pharetra. Phasellus ultricies felis at ligula laoreet luctus.
            Integer tristique sit amet ex et feugiat. Aliquam sapien felis,
            vehicula ac eros ut, dignissim feugiat sem. Vivamus gravida aliquet
            imperdiet. Cras ut auctor felis. Cras interdum sodales neque id
            pulvinar. Pellentesque eu nisl in augue finibus eleifend ut id urna.
            Aliquam ac leo nisl. Nulla at facilisis sapien, a semper diam. Donec
            scelerisque justo id mattis elementum. Etiam volutpat at tellus in
            egestas. Curabitur nec nibh vitae sapien posuere tincidunt a quis
            enim. Maecenas tempus velit turpis, vitae gravida lacus suscipit
            rutrum. Phasellus at tristique velit.
          </Paragraph>
        </Box>

        <Box background="light-2" gridArea="info2">
          <Heading size="small" margin="small">
            Lorem ipsum
          </Heading>
          <Paragraph margin="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            mauris enim, iaculis quis turpis quis, tempor pharetra ex.
            Suspendisse enim nulla, auctor a enim ut, condimentum rutrum nisl.
            Quisque id malesuada lectus. Donec pretium sit amet turpis sed
            porttitor. In tincidunt magna sed volutpat ornare. Proin et erat sit
            amet turpis accumsan malesuada. In in nisi eu leo placerat posuere
            quis in mauris. Phasellus euismod pretium ipsum, sed auctor nunc
            ornare quis. Duis pretium risus ut tristique efficitur. Aenean
            aliquam molestie lobortis. Cras justo nunc, ornare ut cursus nec,
            imperdiet vitae sapien. Suspendisse ut dictum ante. Sed vitae cursus
            nulla. Aliquam lobortis pretium mauris, non vehicula purus malesuada
            quis. Mauris posuere vestibulum felis, non pulvinar dui congue sit
            amet. Aliquam erat volutpat. Sed id magna in magna fringilla
            pharetra. Phasellus ultricies felis at ligula laoreet luctus.
            Integer tristique sit amet ex et feugiat. Aliquam sapien felis,
            vehicula ac eros ut, dignissim feugiat sem. Vivamus gravida aliquet
            imperdiet. Cras ut auctor felis. Cras interdum sodales neque id
            pulvinar. Pellentesque eu nisl in augue finibus eleifend ut id urna.
            Aliquam ac leo nisl. Nulla at facilisis sapien, a semper diam. Donec
            scelerisque justo id mattis elementum. Etiam volutpat at tellus in
            egestas. Curabitur nec nibh vitae sapien posuere tincidunt a quis
            enim. Maecenas tempus velit turpis, vitae gravida lacus suscipit
            rutrum. Phasellus at tristique velit.
          </Paragraph>
        </Box>
      </Grid>
    </div>
  );
};

const MainContent = () => (
  <Grommet theme={grommet}>
    <Main pad="small" top="small">
      <GridLayout />
    </Main>
  </Grommet>
);

export default function Home() {
  return (
    <div>
      <MainContent />
    </div>
  );
}
