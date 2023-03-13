"""empty message

Revision ID: 8c224ff83766
Revises: 2931d550ecce
Create Date: 2023-03-13 17:30:18.712518

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8c224ff83766'
down_revision = '2931d550ecce'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(length=120), nullable=True))
        batch_op.add_column(sa.Column('lastname', sa.String(length=120), nullable=True))
        batch_op.create_unique_constraint(None, ['name'])
        batch_op.create_unique_constraint(None, ['lastname'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('lastname')
        batch_op.drop_column('name')

    # ### end Alembic commands ###