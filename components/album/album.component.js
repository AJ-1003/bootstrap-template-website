// React
import React from "react";

// Next

// Contentful

// Components
import AlbumHeaderComponent from "./album-header.component";
import AlbumSectionComponent from "./album-section.component";

// Images

// Data

// Styles
import styled from "styled-components";
import AlbumCardComponent from "./album-card.component";
import AlbumFooterComponent from "./album-footer.component";

const Album = styled.div`
  .b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
  }

  .b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
  }

  .bi {
    vertical-align: -.125em;
    fill: currentColor;
  }

  .nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
  }

  .nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }
`;

const AlbumComponent = () => {
  return (
    <Album>
      <AlbumHeaderComponent/>
      <main>
        <AlbumSectionComponent/>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <AlbumCardComponent/>
              <AlbumCardComponent/>
              <AlbumCardComponent/>
              
              <AlbumCardComponent/>
              <AlbumCardComponent/>
              <AlbumCardComponent/>

              <AlbumCardComponent/>
              <AlbumCardComponent/>
              <AlbumCardComponent/>
            </div>
          </div>
        </div>
      </main>
      <AlbumFooterComponent/>
    </Album>
  );
};

export default AlbumComponent;
