import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Login,
  Home,
  // Flights,
  Hotels,
  Attractions,
  TourGuides,
  Packages,
  DestinationForm,
  SharedLayoutHome,
  SharedLayoutEditorDashboard,
  HotelForm,
  // FlightForm,
  // FlightPreview,
  DestinationUpdateForm,
  PackageForm,
  PackageUpdateForm,
  HotelUpdateForm,
  HotelPreview,
  RegistrationForm,
  SharedLayoutDestination,
  DesPreview,
  // FlightUpdateForm,
  GuideUpdateForm,
  GuideForm,
  UserProfile,
  FinanceForm,
  ClientDashboard,
  ProfileUpdateForm,
  Bookings,
  Feedback,
  Payments,
  HotelResForm,
  // FlightResForm,
  FeedbackForm,
  BookingForm,
  BookingPreview,
  CeoDashboard,
  SharedLayoutCeoDashboard,
  CeoOverview,
  CeoRevenue,
  EditorWebContent,
  DesResUpdateForm,
  SharedLayoutFinanceDashboard,
  FinanceDashboard,
  FinancePending,
  FinanceDestinationUpdateForm,
  // FinanceFlightUpdateForm,
  // FlightResUpdateForm,
  FinanceHotelUpdateForm,
  FinanceGuideUpdateForm,
  HotelResUpdateForms,
  PackagePreview,
  PackageReservationForm,
  PackageReservationUpdateForm,
  InvoiceForm,
  Invoice,
  InvoiceUpdateForm,
  // FlightTicketView,
  BookingUpdateForm,
  FeedbackUpdateForm,
  Culture,
  CultureForm,
  CultureUpdateForm,
} from "../pages";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayoutHome />}>
          <Route index element={<Home />} />
          {/* <Route path="flights" element={<Flights />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="attractions" element={<SharedLayoutDestination />}>
            <Route index element={<Attractions />} />
            <Route path=":id" element={<DesPreview />} />
          </Route>
          <Route path="tourGuides" element={<TourGuides />} />
          <Route path="packages" element={<Packages />} />
          <Route path="registration" element={<RegistrationForm />} />
          <Route path="hotelPreview/:id" element={<HotelPreview />} />
          {/* <Route path="flightPreview/:id" element={<FlightPreview />} /> */}
          <Route path="hotelResForm/:id" element={<HotelResForm />} />
          {/* <Route path="flightResForm/:id" element={<FlightResForm />} /> */}
          <Route path="bookingPreview/:id" element={<BookingPreview />} />
          <Route path="bookingForm/:id" element={<BookingForm />} />
          <Route path="PackagePreview/:id" element={<PackagePreview />} />
          <Route path="/Cultures" element={<Culture />} />



          <Route
            path="PackageReservationForm/:id"
            element={<PackageReservationForm />}
          />
        </Route>
        <Route path="/" element={<ClientDashboard />}>
          <Route path="FeedbackForm" element={<FeedbackForm />} />
          <Route path="feedbackUpdateForm/:id" element={<FeedbackUpdateForm />} />
        </Route>

        <Route path="/ceoDashboard" element={<SharedLayoutCeoDashboard />}>
          <Route index element={<CeoRevenue />} />
          <Route path="ceoOverview/:type" element={<CeoOverview />} />
          <Route path="ceoRevenue" element={<CeoRevenue />} />
        </Route>

        <Route path="/ceoDashboard" element={<SharedLayoutCeoDashboard />}>
          <Route index element={<CeoDashboard />} />
          <Route path="ceoOverview/:type" element={<CeoOverview />} />
        </Route>
        <Route path="/fianaceForm" element={<FinanceForm />} />
        <Route
          path="/editorDashboard"
          element={<SharedLayoutEditorDashboard />}
        >
          <Route index element={<CeoDashboard />} />
          <Route path="editorWebContent/:type" element={<EditorWebContent />} />
          {/* <Route path="flightForm" element={<FlightForm />} /> */}
          <Route path="hotelForm" element={<HotelForm />} />

          <Route path="destinationForm" element={<DestinationForm />} />
          <Route path="guideForm" element={<GuideForm />} />
          <Route path="packageForm" element={<PackageForm />} />
          <Route path="cultureForm" element={<CultureForm />} />

          {/* <Route path="flightUpdateForm/:id" element={<FlightUpdateForm />} /> */}
          <Route path="hotelUpdateForm/:id" element={<HotelUpdateForm />} />
          <Route path="cultureUpdateForm/:id" element={<CultureUpdateForm />} />

          <Route
            path="destinationUpdateForm/:id"
            element={<DestinationUpdateForm />}
          />
          <Route path="guideUpdateForm/:id" element={<GuideUpdateForm />} />
          <Route path="packageUpdateForm/:id" element={<PackageUpdateForm />} />
        </Route>

        <Route path="/clientDashboard/:id" element={<ClientDashboard />}>
          <Route index element={<UserProfile />} />
          <Route path="home" element={<Home />} />
          <Route path="bookings/:type" element={<Bookings />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="updateProfile" element={<ProfileUpdateForm />} />
          <Route path="payments" element={<Payments />} />
          <Route
            path="desRes/:desId/:desResId"
            element={<DesResUpdateForm />}
          />
          {/* <Route
            path="flightRes/:flightResId"
            element={<FlightResUpdateForm />}
          /> */}
          {/* <Route
            path="flightTicket/:flightResId"
            element={<FlightTicketView />}
          /> */}
          <Route
            path="hotelRes/:hotelResId"
            element={<HotelResUpdateForms />}
          />
          <Route
            path="PackageRes/:packageReservationId"
            element={<PackageReservationUpdateForm />}
          />
          <Route path="booking/:bookingId" element={<BookingUpdateForm />} />
        </Route>

        <Route
          path="/financeDashboard"
          element={<SharedLayoutFinanceDashboard />}
        >
          <Route index element={<FinanceDashboard />} />
          <Route path="pending/:type" element={<FinancePending />} />
          <Route
            path="destinationUpdateForm/:id"
            element={<FinanceDestinationUpdateForm />}
          />
          <Route path="financeRevenue" element={<CeoRevenue />} />
          {/* <Route
            path="financeFlightUpdateForm/:id"
            element={<FinanceFlightUpdateForm />}
          /> */}
          <Route
            path="financeHotelUpdateForm/:id"
            element={<FinanceHotelUpdateForm />}
          />

          <Route
            path="financeGuideUpdateForm/:id"
            element={<FinanceGuideUpdateForm />}
          />
          <Route path="invoiceForm" element={<InvoiceForm />} />
          <Route path="Invoice" element={<Invoice />} />
          <Route path="InvoiceUpdateForm/:id" element={<InvoiceUpdateForm />} />


        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
