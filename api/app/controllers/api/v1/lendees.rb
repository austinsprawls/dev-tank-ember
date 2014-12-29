module API
  module V1
    class Lendees < Grape::API
      include API::V1::Defaults

      resource :lendees do

        desc "Return a lendee"
        params do
          requires :id, type: String, desc: "ID of the lendee"
        end
        get ":id", root: "lendee" do
          Lendee.where(id: permitted_params[:id]).first!
        end

        desc "Return loan belonging to specified lendee"
        params do
          requires :lendee_id, type: String, desc: "ID of the lendee"
        end
        get ":lendee_id/loan", root: "loan" do
          Loan.where(lendee_id: permitted_params[:lendee_id]).first!
        end

        desc "Return all investments in specified lendee"
        params do
          requires :lendee_id, type: String, desc: "ID of the lendee"
        end
        get ":lendee_id/investments", root: "investment" do
          loan = Loan.where(lendee_id: permitted_params[:lendee_id]).first!
          Investment.where(loan_id: loan.id)
        end

      end
    end
  end
end
