import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    HStack,
    Flex,
  } from "@chakra-ui/react";
  import Link from "next/link";
  import Stars from "@/src/components/bookdetail/Stars";
  
  interface Props{
    id:number,
              key:number,
              bookname:string,
              authorname:string,
              price:number
              language:string
              publisher:string
              bookcoverimage:string
  }
  
  function BookItem(props:Props) {
    return (
      <Card
        overflow="hidden"
        variant="outline"
        width="100%"
        borderRadius="20px"
        justifyContent="center"
        flexDir="row"
        
      >
        <Stack width="90%">
          <Link href={`/books/${props.id}`} className="h-full">
          <CardBody px="0" h="full">
            <Flex
            className="h-full items-center gap-[10px] md:flex-row md:flex-start md:justify-between md:gap-[24px]"
            >
              
                <Image
                  src={props.bookcoverimage}
                  className="w-[80px] h-[80px]  sm:w-[148px] sm:h-[230px]"
                  alt="Green double couch with wooden legs"
                  borderRadius="12px"
                  border="0.5px"
                  borderColor="#C8C8C8"
                />
              <Stack spacing="3" className="gap-[5px] md:gap-[20px] h-full" flexGrow="1" >
                <Heading
                  fontFamily="Vazirmatn"
                  fontWeight="bold"
                  fontSize={{base:"15px",md:"18px"}}
                  flex="1"
                  >
                  {props.bookname}
                </Heading>
                <Stars book_id={props.id}/>     
                   <Stack rowGap="20px" flexGrow="1" display={{base:"none",sm:"flex"}}>
                  <span className="text-[16px] font-normal text-[#000015]">
                    زبان:&nbsp;{props.language}
                  </span>
                  <span className="text-[16px] font-normal text-[#000015]">
                    نویسنده:&nbsp;{props.authorname}
                  </span>
                  <span className="text-[16px] font-normal text-[#000015]">
                    ناشر:&nbsp;{props.publisher}
                  </span>
                </Stack>
              </Stack>
            </Flex>
          </CardBody>
                  </Link>
        </Stack>
      </Card>
    );
  }
  
  export default BookItem;
  