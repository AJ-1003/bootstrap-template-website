// React
import React from "react";

// Next
import Link from "next/link";

// Contentful

// Components

// Images

// Data

// Styles


const AlbumFooterComponent = () => {
  return (
    <footer className="text-muted py-5">
      <div className="container">
        <p className="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p className="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
        <p className="mb-0">New to Bootstrap? <Link href="/">Visit the homepage</Link> or read our <Link href="../getting-started/introduction/">getting started guide</Link>.</p>
      </div>
    </footer>
  );
};

export default AlbumFooterComponent;
