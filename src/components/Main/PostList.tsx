import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import PostItem from "components/Main/PostItem";
import { FluidObject } from "gatsby-image";
import useInfiniteScroll, { useInfiniteScrollType } from "hooks/useInfiniteScroll";

// const POST_ITEM_DATA = {
//   title: "Post Item Title",
//   date: "2020.01.29.",
//   categories: ["Web", "Frontend", "Testing"],
//   summary:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!",
//   thumbnail:
//     "https://ji5485.github.io/static/e4f34c558ae8e8235ff53b0311085796/4d854/javascript-core-concept-summary-function-1.webp",
//   link: "https://www.google.co.kr/",
// };

export type PostType = {
  node: {
    id: string;
    fields: {
      slug: string;
    }
    frontmatter: {
      title: string;
      summary: string;
      date: string;
      categories: string[];
      thumbnail: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
  };
};

interface PostListProps {
  selectedCategory: string;
  posts: PostType[];
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;

const PostList: FunctionComponent<PostListProps> = function ({ 
  selectedCategory,
  posts
 }) {
   const { containRef, postList }: useInfiniteScrollType = useInfiniteScroll(
     selectedCategory,
     posts,
   )

  return (
    <PostListWrapper ref={containRef}>
      {postList.map(({ node: { id, fields: { slug }, frontmatter } }: PostType) => (
        <PostItem
          {...frontmatter}
          link={slug}
          key={id}
        />
      ))}
    </PostListWrapper>
  );
};

export default PostList;
