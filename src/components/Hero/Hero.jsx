import React from "react"
import { Stack } from "@mui/system";

const Hero = () => {
  return (
    <div>
    <div class="min-h-screen flex justify-center items-center bg-hero bg-fixed bg-no-repeat bg-cover bg-center">
      <Stack spacing={2}>
          <h1 class="font-black text-4xl">Atman Capital</h1>
          <h1 class="font-black text-1xl">Empoderamos tus finanzas</h1>
      </Stack>
      
    </div>
    </div>
  );
};

export default Hero;
