import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

const Modal = ({ devLogin }) => (
  <div>
    <h1>Adicionar novo usuário</h1>
    <input type="text" name="" id="" placeholder="Usuário do github" />
    <button>Cancelar</button>
    <button>Salvar</button>
  </div>
);

Modal.propTypes = {
  count: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  //  you can and should use js functions inside of the mapping
  // to manipulate data - avoid using function inside of the render method
  count: state.favorites.data.length
});

export default connect(mapStateToProps)(Modal);
