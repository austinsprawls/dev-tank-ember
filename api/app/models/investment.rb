class Investment < ActiveRecord::Base
  belongs_to :lender
  bleongs_to :loan
end
