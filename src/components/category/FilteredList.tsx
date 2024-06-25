import BookItem from "@/src/components/homepage/bookList/BookItem";
import useGetAuthorBooks from "@/src/react-query/hooks/useGetAuthorBooks";
import useGetBookGroups from "@/src/react-query/hooks/useGetBookGroups";
import useGetCategoryBooks from "@/src/react-query/hooks/useGetCategoryBooks";
import { useRouter } from "next/router";
import React from "react";
import { Flex } from "@chakra-ui/react";

interface Props {
  language: string | null;
  priceRange: number | null;
  pageRange: number | null;
}

function FilteredList(props: Props) {
  const router = useRouter();
  const { data: groupData, isSuccess } = useGetBookGroups(router.query.group as string);
  const { data: authorData, isSuccess: authorIsSuccess } = useGetAuthorBooks(
    router.query.author as string
  );
  const { data: categoryData, isSuccess: categoryIsSuccess } =
    useGetCategoryBooks(router.query.category as string);

  if (isSuccess) {
    let filteredGroupData = groupData;
    if (props.priceRange) {
      filteredGroupData = filteredGroupData.filter(
        (data) => data.price <= props.priceRange!
      );
    }
    if (props.pageRange) {
      filteredGroupData = filteredGroupData.filter(
        (data) => data.number_of_pages <= props.pageRange!
      );
    }

    if (props.language) {
      filteredGroupData = filteredGroupData.filter(
        (data) => data.language === props.language
      );
    }
    return (
      <div className="grid grid-cols-2 gap-[10px] lg:gap-[20px] md:grid-cols-3 lg:grid-cols-4 auto-rows-fr  ">
        {filteredGroupData?.map((book) => (
          <BookItem
            id={book.id}
            key={book.id}
            bookname={book.name}
            authorname={book.author_name}
            price={book.price}
            language={book.language}
            publisher={book.publisher}
            bookcoverimage={book.book_cover_image}
          />
        ))}
      </div>
    );
  }
  if (categoryIsSuccess) {
    let filteredCategoryData = categoryData;
    if (props.priceRange) {
      filteredCategoryData = filteredCategoryData.filter(
        (data) => data.price <= props.priceRange!
      );
    }
    if (props.pageRange) {
      filteredCategoryData = filteredCategoryData.filter(
        (data) => data.number_of_pages <= props.pageRange!
      );
    }
    if (props.language) {
      filteredCategoryData = filteredCategoryData.filter(
        (data) => data.language === props.language
      );
    }
    return (
      <div className="grid grid-cols-2 gap-[10px] lg:gap-[20px] md:grid-cols-3 lg:grid-cols-4 auto-rows-fr  ">
        {filteredCategoryData?.map((book) => (
          <BookItem
            id={book.id}
            key={book.id}
            bookname={book.name}
            authorname={book.author_name}
            price={book.price}
            language={book.language}
            publisher={book.publisher}
            bookcoverimage={book.book_cover_image}
          />
        ))}
      </div>
    );
  }
  if (authorIsSuccess) {
    let filteredAuthorData = authorData;
    if (props.priceRange) {
      filteredAuthorData = filteredAuthorData.filter(
        (data) => data.price <= props.priceRange!
      );
    }
    if (props.pageRange) {
      filteredAuthorData = filteredAuthorData.filter(
        (data) => data.number_of_pages <= props.pageRange!
      );
    }
    if (props.language) {
      filteredAuthorData = filteredAuthorData.filter(
        (data) => data.language === props.language
      );
    }
    return (
      <div className="grid grid-cols-2 gap-[10px] lg:gap-[20px] md:grid-cols-3 lg:grid-cols-4 auto-rows-fr  ">
        {filteredAuthorData?.map((book) => (
          <BookItem
            id={book.id}
            key={book.id}
            bookname={book.name}
            authorname={book.author_name}
            price={book.price}
            language={book.language}
            publisher={book.publisher}
            bookcoverimage={book.book_cover_image}
          />
        ))}
      </div>
    );
  }
}

export default FilteredList;
