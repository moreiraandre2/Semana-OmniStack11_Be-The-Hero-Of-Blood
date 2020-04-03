
exports.up = function(knex) {
    return knex.schema.createTable('calendar', function(table){
        table.increments();
        table.string('data').notNullable();
        table.string('hour').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table.string('place').notNullable();

        table.string('user_id').notNullable();

        table.foreign('user_id').references('id').inTable('users'); 

    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('calendar');
};
