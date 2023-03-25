"""empty message

Revision ID: 875f580b72c7
Revises: 
Create Date: 2023-03-25 09:09:22.388218

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '875f580b72c7'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('pistas',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('nombre')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=True),
    sa.Column('lastname', sa.String(length=120), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('lastname'),
    sa.UniqueConstraint('name')
    )
    op.create_table('reservas',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('pistas_id', sa.Integer(), nullable=False),
    sa.Column('startTime', sa.String(length=120), nullable=False),
    sa.ForeignKeyConstraint(['pistas_id'], ['pistas.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('startTime')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reservas')
    op.drop_table('user')
    op.drop_table('pistas')
    # ### end Alembic commands ###
