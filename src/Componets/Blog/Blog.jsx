import React from "react";

const Blog = () => {
  return (
    <div>
      {/* context api */}
      <div className="mb-8">
        <h2 className="font-extrabold text-xl mb-4">
          1: When should you use context API?
        </h2>
        <p className="leading-8 text-gray-700">
          Ans: Context is primarily used when some data needs to be accessible
          by many components at different nesting levels. Apply it sparingly
          because it makes component reuse more difficult. If you only want to
          avoid passing some props through many levels, component composition is
          often a simpler solution than context.{" "}
        </p>
      </div>
      {/* custom  hook */}
      <div className="mb-8">
        <h2 className="font-extrabold text-xl mb-4">2: What is custom HOOK ?</h2>
        <p className="leading-8 text-gray-700">
          Ans: When you have component logic that needs to be used by multiple
          components, we can extract that logic to a custom Hook.{" "}
        </p>
      </div>
      {/* useEffect */}

      <div className="mb-8">
        <h2 className="font-extrabold text-xl mb-4">3: What is useEffect ?</h2>
        <p className="leading-8 text-gray-700">
          Ans: useEffect is a React Hook that lets you synchronize a component
          with an external system.
        </p>
      </div>
      {/* useMemo */}
      <div className="mb-8">
        <h2 className="font-extrabold text-xl  mb-4">4: What is useMemo ?</h2>
        <p className="leading-8 text-gray-700">
          Ans: useMemo is a hook that is used in the functional component of
          React that returns a memoized value.
        </p>
      </div>
    </div>
  );
};

export default Blog;
