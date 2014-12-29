module API
  module V1
    class Loans < Grape::API
      include API::V1::Defaults

      resource :loans do
        desc "Return all loans"
        get "", root: :loans do
          Loan.all
        end

        desc "Return a loan"
        params do
          requires :id, type: String, desc: "ID of the loan"
        end
        get ":id", root: "loan" do
          Loan.where(id: permitted_params[:id]).first!
        end
      end

    end
  end
end
