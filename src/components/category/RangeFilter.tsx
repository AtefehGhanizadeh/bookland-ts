import React, { Dispatch, SetStateAction } from "react";
import {
  Tooltip,
  Box,
  Heading,
  Divider,
  Circle,
} from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

function RangeFilter({header,min,max,setRange}:{header:string,min:string,max:string,setRange:Dispatch<SetStateAction<number|null>>}) {
  const [sliderValue, setSliderValue] = React.useState(header==="قیمت"?20000:100);
  const [showTooltip, setShowTooltip] = React.useState(false);
  return (
    <Box
      backgroundColor="white"
      borderRadius="16px"
      paddingX="14px"
      paddingTop="20px"
      paddingBottom="50px"
    >
      <div>
        <Heading
          fontFamily="Vazirmatn"
          fontSize="16px"
          fontWeight="semibold"
          color="primaryBlue"
          marginBottom="20px"
        >
          {header}
        </Heading>
        <Divider marginBottom="50px" />
        <Slider
          id="slider"
          defaultValue={header==="قیمت"?20000:100}
          min={+min}
          max={+max}
          onChange={(v) => setSliderValue(v)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onChangeEnd={(val) => setRange(val)}
        >
          <SliderMark value={+min} mt="5" ml="-2.5" fontSize="12px" color="rgba(200, 200, 200, 1)">
            {+min}
          </SliderMark>
          <SliderMark value={+max} mt="5"  fontSize="12px" color="rgba(200, 200, 200, 1)">
            {header==="قیمت"?max+" تومان":max}
          </SliderMark>
          <SliderTrack
            bg="rgba(87, 93, 251, 0.11)"
            height="10px"
            borderRadius="5px"
          >
            <SliderFilledTrack bg="primaryBlue" />
          </SliderTrack>
          <Tooltip
            hasArrow
            bg="primaryBlue"
            color="white"
            borderRadius="12px"
            padding="10px"
            minW="50px"
            textAlign="center"
            placement="top"
            isOpen={showTooltip}
            label={`${sliderValue}`}
          >
            <SliderThumb>
              <Circle  bg="white">
                <Circle  bg="rgba(87, 93, 251, 1)" />
              </Circle>
            </SliderThumb>
          </Tooltip>
        </Slider>
      </div>
    </Box>
  );
}

export default RangeFilter;
