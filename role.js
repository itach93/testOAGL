module.exports = (sequilize, Sequilize) => {
    const Role = sequilize.define('Roles', {
        id: {
            type: Sequilize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequilize.STRING
        }
    });

    return Role;
}