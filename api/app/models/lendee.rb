class Lendee < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_one :loan

  validates :first_name, :last_name, :street_address, :city, :state, :zip_code,
            :date_of_birth, :yearly_individual_income, :credit_range, presence: true

  before_save :ensure_authentication_token

  def ensure_authentication_token
    if authentication_token.blank?
      self.authentication_token = generate_authentication_token
    end
  end

  private

  def generate_authentication_token
    loop do
      token = Devise.friendly_token
      break token unless Lendee.where(authentication_token: token).first
    end
  end
end
