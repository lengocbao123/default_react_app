import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { withTranslation } from "react-i18next";
import NoAuthLayout from "../layouts/noAuth";
import { APP_NAME } from "../lib/constant";

class RegisterPage extends React.Component {
  render() {
    return (
      <NoAuthLayout>
        <Helmet>
          <title>
            {t("common.register")} | {APP_NAME}
          </title>
        </Helmet>
      </NoAuthLayout>
    );
  }
}

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});
export default connect(mapState, mapDispatch)(withTranslation()(RegisterPage));
