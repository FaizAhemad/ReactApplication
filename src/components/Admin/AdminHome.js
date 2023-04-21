import React, {useRef, forwardRef} from 'react';
import {Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import {
  changePaginationProps,
  changeProductView,
} from '../../actions/products-action';
import {hideSidebar, showSidebar} from '../../actions/sidebar-actions';
import VirtualizedTable from '../Vitualized/Table/VirtualizedTable';

function AdminHome() {
  return (
    <Container style={{paddingTop: '200px'}}>
      <h1>Welcome, Admin</h1>

      <VirtualizedTable
        width={300}
        height={300}
        headerHeight={20}
        rowHeight={30}
      />
    </Container>
  );
}

const mapStateToProps = store => {
  return {
    store,
    isSidebarVisible: store.sidebarReducer.isSideBarVisible,
    isPageNotFoundPage: store.generalReducer.isPageNotFoundComponent,
    user: store.loginReducer.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeProductViewDispatch: view => {
      dispatch(changeProductView(view));
    },
    setPaginationProps: obj => {
      dispatch(changePaginationProps(obj));
    },
    showSidebar: () => {
      dispatch(showSidebar());
    },
    hideSidebar: () => {
      dispatch(hideSidebar());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);
