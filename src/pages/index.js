import React from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import NoAuthLayout from "../layouts/noAuth";
import { APP_NAME } from "../lib/constant";

class IndexPage extends React.Component {
  render() {
    return (
      <NoAuthLayout>
        <Helmet>
          <title>{APP_NAME}</title>
        </Helmet>
      </NoAuthLayout>
    );
  }
}

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});
export default connect(mapState, mapDispatch)(withTranslation()(IndexPage));
