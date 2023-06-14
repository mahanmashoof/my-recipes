import styled from "styled-components";

export const TodoDescRow = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 1rem;
  }
  button {
    margin-left: 1rem;
    height: 20px;
  }
`;

export const TaskEdit = styled.input`
  margin-left: 1rem;
`;

interface ITaskStatus {
  taskDone: boolean;
}

export const TaskStatus = styled.p<ITaskStatus>`
  color: ${(p) => (p.taskDone ? "gray" : "black")};
  text-decoration: ${(p) => (p.taskDone ? "line-through" : "none")};
  cursor: pointer;
`;
