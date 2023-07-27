import React from "react";

interface IPosts {
  id: string;
  title: string;
  body: string;
}

interface IState {
  counter: number;
  posts: IPosts[];
}

class ClassBased extends React.Component<{}, IState> {
  state: { counter: number; posts: IPosts[] };

  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
      posts: [],
    };
    console.log("constructor");
  }

  componentDidMount(): void {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((result) => {
        console.log("RESULT : ", result);
        this.setState({
          posts: result,
        });
      })
      .catch(console.error);
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{ counter: number }>,
    snapshot?: any
  ): void {
    console.log("componentDidUpdate");
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount!");
  }

  render(): React.ReactNode {
    console.log("render");
    return (
      <div>
        <h1>Class based component loaded!!!</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          {this.state.counter}
        </button>

        <hr />
        <ul>
          {this.state.posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassBased;
