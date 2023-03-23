import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const StyledPaginate = styled(ReactPaginate)`
  margin-bottom: 50px;
  li {
    display: inline-block;

    a {
      text-align: center;
      width: 45px;
      line-height: 42px;
      height: 45px;
      border: 1px solid #007dff;
      border-radius: 30px;
      margin-right: 10px;
      cursor: pointer;
      display: inline-block;
      color: #007dff;

      &:hover {
        background-color: #007dff;
        color: #fff;
      }
    }
  }

  :global {
    .selected {
      a {
        background-color: #fe5f1e;
        color: #fff;
      }
    }
  }
`;
