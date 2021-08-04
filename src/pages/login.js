import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { withTranslation } from "react-i18next";
import NoAuthLayout from "../layouts/noAuth";
import { APP_NAME } from "../lib/constant";
class LoginPage extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <NoAuthLayout>
        <Helmet>
          <title>
            {t("common.login")} | {APP_NAME}
          </title>
        </Helmet>
      </NoAuthLayout>
    );
  }
}

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});
export default connect(mapState, mapDispatch)(withTranslation()(LoginPage));
