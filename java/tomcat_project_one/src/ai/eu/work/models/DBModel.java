package ai.eu.work.models;

import java.util.*;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.PreparedStatement;

import ai.eu.work.models.Model;
import ai.eu.work.models.ModelException;

public class DBModel implements Model {

    protected Connection connection;
    protected Statement statment;

    public DBModel(Connection connection) {
        this.connection = connection;
    }

    public void close() throws Exception {
        try {
            if (statment != null) {
                statment.close();
            }
            //connection.close();
        } catch (SQLException e) {
            throw new Exception(e);
        }
    }

    public ResultSet getData() throws ModelException {
        if (connection == null) {
            throw new ModelException("no connection while getData");
        }
        try {
            this.statment = connection.createStatement(
                    ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_READ_ONLY);
        } catch (SQLException e) {
            throw new ModelException("fail create statement");
        }
        return null;
    }

    /* not yet */
    public Collection execQuery(PreparedStatement pst) throws ModelException {
        if (connection == null) {
            throw new ModelException("no connection while getData");
        }
        try {
            ResultSet rs = pst.executeQuery();

        } catch (SQLException e) {
            throw new ModelException("fail create statement");
        }
        return null;
    }
}
