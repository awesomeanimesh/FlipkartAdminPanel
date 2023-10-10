import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "../pages/Home/home.css";

export interface IRegisterForm {
  orgId: string;
  cityName: string;
  orgName: string;
  teamName: string;
  noOfIntegrations: number;
  teamCount: number;
  similarMonth: number;
  goLiveMonth: number;
  integrationsMonth: number;
  tatForIntegration: string;
  aiCycle: string;
  integrationDate: Date;
  erpDate: Date;
  ispDate: Date;
  activeAiTime: Date;
  activeAiQcTime: Date;
  monthlyCycles: boolean;
  erpModule: boolean;
  aiFormat: boolean;
}
function OrgSetupDetails() {
  const [selectedNoOfIntegrations, setSelectedNoOfIntegrations] = useState(0);
  const [selectedSimilarMonth, setSelectedSimilarMonth] = useState(0);
  const [selectedGoLiveMonth, setSelectedGoLiveMonth] = useState(0);
  const [selectedIntegrationsMonth, setSelectedIntegrationsMonth] = useState(0);
  const [selectedTatForIntegration, setSelectedTatForIntegration] =
    useState("");
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
    getValues,
  } = useForm<IRegisterForm>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IRegisterForm> = (data: IRegisterForm) => {
    const updatedFormData = {
      orgId: data.orgId,
      cityName: data.cityName,
      orgName: data.orgName,
      teamName: data.teamName,
      noOfIntegrations: data.noOfIntegrations,
      teamCount: data.teamCount,
      similarMonth: data.similarMonth,
      goLiveMonth: data.goLiveMonth,
      integrationsMonth: data.integrationsMonth,
      tatForIntegration: data.tatForIntegration,
      aiCycle: data.aiCycle,
      integrationDate: data.integrationDate,
      erpDate: data.erpDate,
      ispDate: data.ispDate,
      activeAiTime: data.activeAiTime,
      activeAiQcTime: data.activeAiQcTime,
      monthlyCycles: data.monthlyCycles,
      erpModule: data.erpModule,
      aiFormat: data.aiFormat,
    };
  };

  const handlenoOfIntegrations = (event: any): any => {
    setSelectedNoOfIntegrations(event.target.value);
    setValue("noOfIntegrations", event.target.value);
  };
  const handleSimilarMonth = (event: any): any => {
    setSelectedSimilarMonth(event.target.value);
    setValue("similarMonth", event.target.value);
  };
  const handleGoLiveMonth = (event: any): any => {
    setSelectedGoLiveMonth(event.target.value);
    setValue("goLiveMonth", event.target.value);
  };
  const handleIntegrationsMonth = (event: any): any => {
    setSelectedIntegrationsMonth(event.target.value);
    setValue("integrationsMonth", event.target.value);
  };
  const handleTatForIntegration = (event: any): any => {
    setSelectedTatForIntegration(event.target.value);
    setValue("tatForIntegration", event.target.value);
  };
  return (
    <div style={{ width: "100%" }}>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></Stack>

      <Stack py={2}>
        <form onSubmit={handleSubmit(onSubmit)} style={{}}>
          <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
            <Grid item xs={12} sm={6}>
              <div className="companyLogo">
                <div className="ChangeLogo">Change</div>
                <div className="imageLogo">
                  <img
                    src="https://res.cloudinary.com/dyaaypoqk/image/upload/v1696917616/FlipkartAdmin/OracleLogo_szitha.png"
                    width={"100px"}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack
                sx={{
                  display: "flex",
                  width: "90%",
                  overflow: "hidden",
                }}
              >
                <div className="orgLogo">Organisation Logo</div>
                <div className="orgDesc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="orgInstruction">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ width: "90%" }}>
                <Typography mb={1.2} sx={InputStyle1}>
                  Org Id
                </Typography>
                <TextField
                  hiddenLabel
                  //   size="medium"
                  fullWidth
                  placeholder="Enter Org ID"
                  id="filled-hidden-label-normal"
                  defaultValue=""
                  InputProps={{
                    classes: {
                      input: "texfeildrounded", // Add a CSS class to the input element
                    },
                    sx: {
                      BoxStyle1,
                    },
                    disableUnderline: true,
                  }}
                  {...register("orgId", {
                    required: true,
                    pattern: /^[a-zA-Z0-9_.-]+$/,
                  })}
                />
                {errors.orgId?.type === "pattern" && (
                  <span
                    style={{ color: "red", fontSize: "12px", marginTop: "4px" }}
                  >
                    Please enter a valid Org id
                  </span>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ width: "90%" }}>
                <Typography mb={1.2} sx={InputStyle1}>
                  City Name
                </Typography>
                <TextField
                  hiddenLabel
                  //   size="medium"
                  fullWidth
                  placeholder="Enter City Name"
                  id="filled-hidden-label-normal"
                  defaultValue=""
                  InputProps={{
                    classes: {
                      input: "texfeildrounded", // Add a CSS class to the input element
                    },
                    sx: {
                      BoxStyle1,
                    },
                    disableUnderline: true,
                  }}
                  {...register("cityName", {
                    required: true,
                    // pattern:
                    //   /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                  })}
                />
                {errors.cityName?.type === "pattern" && (
                  <span
                    style={{ color: "red", fontSize: "12px", marginTop: "4px" }}
                  >
                    Please enter a valid City name
                  </span>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ width: "90%" }}>
                <Typography mb={1.2} sx={InputStyle1}>
                  Org Name
                </Typography>
                <TextField
                  hiddenLabel
                  //   size="medium"
                  fullWidth
                  placeholder="Enter Org Name"
                  id="filled-hidden-label-normal"
                  defaultValue=""
                  InputProps={{
                    classes: {
                      input: "texfeildrounded", // Add a CSS class to the input element
                    },
                    sx: {
                      BoxStyle1,
                    },
                    disableUnderline: true,
                  }}
                  {...register("orgName", {
                    required: true,
                    // pattern:
                    //   /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                  })}
                />
                {errors.orgName?.type === "pattern" && (
                  <span
                    style={{ color: "red", fontSize: "12px", marginTop: "4px" }}
                  >
                    Please enter a valid City name
                  </span>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ width: "90%" }}>
                <Typography mb={1.2} sx={InputStyle1}>
                  Team Name
                </Typography>
                <TextField
                  hiddenLabel
                  //   size="medium"
                  fullWidth
                  placeholder="Enter Team Name"
                  id="filled-hidden-label-normal"
                  defaultValue=""
                  InputProps={{
                    classes: {
                      input: "texfeildrounded", // Add a CSS class to the input element
                    },
                    sx: {
                      BoxStyle1,
                    },
                    disableUnderline: true,
                  }}
                  {...register("teamName", {
                    required: true,
                    // pattern:
                    //   /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                  })}
                />
                {errors.teamName?.type === "pattern" && (
                  <span
                    style={{ color: "red", fontSize: "12px", marginTop: "4px" }}
                  >
                    Please enter a valid City name
                  </span>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                sx={{ width: "90%", minWidth: 120 }}
                size="medium"
                variant="standard"
              >
                <Typography mb={1.2} sx={InputStyle1}>
                  No. of Integrations
                </Typography>

                <Select
                  labelId="demo-simple-select-label"
                  label="Ageaa"
                  id="demo-simple-select"
                  value={selectedNoOfIntegrations}
                  displayEmpty
                  {...register("noOfIntegrations", {
                    onChange: handlenoOfIntegrations,
                  })}
                  sx={{
                    ...TextFieldStyle,
                    display: "flex",
                    overflow: "hidden",
                    "& .MuiSelect-select": {
                      "&:focus": {
                        backgroundColor: "transparent",
                      },
                    },
                  }}
                  disableUnderline={true}
                  renderValue={(selected) => (
                    <span
                      style={{
                        ...dropDownStyle,
                        paddingLeft: "4px",
                        fontSize: "14px",
                        opacity: selected ? 1 : 0.5,
                      }}
                    >
                      {selected || "Select"}&nbsp;
                      {selected && selected === 1 ? "Day" : "Days"}
                    </span>
                  )}
                >
                  <MenuItem sx={dropDownStyle} value={1}>
                    1 Day
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={2}>
                    2 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={3}>
                    3 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={4}>
                    4 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={"5"}>
                    5 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={6}>
                    6 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={7}>
                    7 Days
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ width: "90%" }}>
                <Typography mb={1.2} sx={InputStyle1}>
                  Team Count
                </Typography>
                <TextField
                  hiddenLabel
                  //   size="medium"
                  fullWidth
                  placeholder="Enter Team Count"
                  id="filled-hidden-label-normal"
                  defaultValue=""
                  InputProps={{
                    classes: {
                      input: "texfeildrounded", // Add a CSS class to the input element
                    },
                    sx: {
                      BoxStyle1,
                    },
                    disableUnderline: true,
                  }}
                  {...register("teamCount", {
                    required: true,
                    // pattern:
                    //   /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                  })}
                />
                {errors.teamCount?.type === "pattern" && (
                  <span
                    style={{ color: "red", fontSize: "12px", marginTop: "4px" }}
                  >
                    Please enter a valid City name
                  </span>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                sx={{ width: "90%", minWidth: 120 }}
                size="medium"
                variant="standard"
              >
                <Typography mb={1.2} sx={InputStyle1}>
                  Similar Month
                </Typography>

                <Select
                  labelId="demo-simple-select-label"
                  label="Ageaa"
                  id="demo-simple-select"
                  value={selectedSimilarMonth}
                  displayEmpty
                  {...register("similarMonth", {
                    onChange: handleSimilarMonth,
                  })}
                  sx={{
                    ...TextFieldStyle,
                    display: "flex",
                    overflow: "hidden",
                    "& .MuiSelect-select": {
                      "&:focus": {
                        backgroundColor: "transparent",
                      },
                    },
                  }}
                  disableUnderline={true}
                  renderValue={(selected) => (
                    <span
                      style={{
                        ...dropDownStyle,
                        paddingLeft: "4px",
                        fontSize: "14px",
                        opacity: selected ? 1 : 0.5,
                      }}
                    >
                      {selected || "Select"}&nbsp;
                      {selected && selected === 1 ? "Day" : "Days"}
                    </span>
                  )}
                >
                  <MenuItem sx={dropDownStyle} value={1}>
                    1 Day
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={2}>
                    2 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={3}>
                    3 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={4}>
                    4 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={"5"}>
                    5 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={6}>
                    6 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={7}>
                    7 Days
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                sx={{ width: "90%", minWidth: 120 }}
                size="medium"
                variant="standard"
              >
                <Typography mb={1.2} sx={InputStyle1}>
                  Go Live Month
                </Typography>

                <Select
                  labelId="demo-simple-select-label"
                  label="Ageaa"
                  id="demo-simple-select"
                  value={selectedGoLiveMonth}
                  displayEmpty
                  {...register("goLiveMonth", {
                    onChange: handleGoLiveMonth,
                  })}
                  sx={{
                    ...TextFieldStyle,
                    display: "flex",
                    overflow: "hidden",
                    "& .MuiSelect-select": {
                      "&:focus": {
                        backgroundColor: "transparent",
                      },
                    },
                  }}
                  disableUnderline={true}
                  renderValue={(selected) => (
                    <span
                      style={{
                        ...dropDownStyle,
                        paddingLeft: "4px",
                        fontSize: "14px",
                        opacity: selected ? 1 : 0.5,
                      }}
                    >
                      {selected || "Select"}&nbsp;
                      {selected && selected === 1 ? "Day" : "Days"}
                    </span>
                  )}
                >
                  <MenuItem sx={dropDownStyle} value={1}>
                    1 Day
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={2}>
                    2 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={3}>
                    3 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={4}>
                    4 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={"5"}>
                    5 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={6}>
                    6 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={7}>
                    7 Days
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                sx={{ width: "90%", minWidth: 120 }}
                size="medium"
                variant="standard"
              >
                <Typography mb={1.2} sx={InputStyle1}>
                  Integration Months
                </Typography>

                <Select
                  labelId="demo-simple-select-label"
                  label="Ageaa"
                  id="demo-simple-select"
                  value={selectedIntegrationsMonth}
                  displayEmpty
                  {...register("integrationsMonth", {
                    onChange: handleIntegrationsMonth,
                  })}
                  sx={{
                    ...TextFieldStyle,
                    display: "flex",
                    overflow: "hidden",
                    "& .MuiSelect-select": {
                      "&:focus": {
                        backgroundColor: "transparent",
                      },
                    },
                  }}
                  disableUnderline={true}
                  renderValue={(selected) => (
                    <span
                      style={{
                        ...dropDownStyle,
                        paddingLeft: "4px",
                        fontSize: "14px",
                        opacity: selected ? 1 : 0.5,
                      }}
                    >
                      {selected || "Select"}&nbsp;
                      {selected && selected === 1 ? "Day" : "Days"}
                    </span>
                  )}
                >
                  <MenuItem sx={dropDownStyle} value={1}>
                    1 Day
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={2}>
                    2 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={3}>
                    3 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={4}>
                    4 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={"5"}>
                    5 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={6}>
                    6 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={7}>
                    7 Days
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                sx={{ width: "90%", minWidth: 120 }}
                size="medium"
                variant="standard"
              >
                <Typography mb={1.2} sx={InputStyle1}>
                  TAT for Integration
                </Typography>

                <Select
                  labelId="demo-simple-select-label"
                  label="Ageaa"
                  id="demo-simple-select"
                  value={selectedTatForIntegration}
                  displayEmpty
                  {...register("tatForIntegration", {
                    onChange: handleTatForIntegration,
                  })}
                  sx={{
                    ...TextFieldStyle,
                    display: "flex",
                    overflow: "hidden",
                    "& .MuiSelect-select": {
                      "&:focus": {
                        backgroundColor: "transparent",
                      },
                    },
                  }}
                  disableUnderline={true}
                  renderValue={(selected) => (
                    <span
                      style={{
                        ...dropDownStyle,
                        paddingLeft: "4px",
                        fontSize: "14px",
                        opacity: selected ? "1" : 0.5,
                      }}
                    >
                      {selected || "Select"}&nbsp;
                      {selected && selected === "1" ? "Day" : "Days"}
                    </span>
                  )}
                >
                  <MenuItem sx={dropDownStyle} value={"1"}>
                    1 Day
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={"2"}>
                    2 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={"3"}>
                    3 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={"4"}>
                    4 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={"5"}>
                    5 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={"6"}>
                    6 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={"7"}>
                    7 Days
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                sx={{ width: "90%", minWidth: 120 }}
                size="medium"
                variant="standard"
              >
                <Typography mb={1.2} sx={InputStyle1}>
                  No. of Integrations
                </Typography>

                <Select
                  labelId="demo-simple-select-label"
                  label="Ageaa"
                  id="demo-simple-select"
                  value={selectedNoOfIntegrations}
                  displayEmpty
                  {...register("noOfIntegrations", {
                    onChange: handlenoOfIntegrations,
                  })}
                  sx={{
                    ...TextFieldStyle,
                    display: "flex",
                    overflow: "hidden",
                    "& .MuiSelect-select": {
                      "&:focus": {
                        backgroundColor: "transparent",
                      },
                    },
                  }}
                  disableUnderline={true}
                  renderValue={(selected) => (
                    <span
                      style={{
                        ...dropDownStyle,
                        paddingLeft: "4px",
                        fontSize: "14px",
                        opacity: selected ? 1 : 0.5,
                      }}
                    >
                      {selected || "Select"}&nbsp;
                      {selected && selected === 1 ? "Day" : "Days"}
                    </span>
                  )}
                >
                  <MenuItem sx={dropDownStyle} value={1}>
                    1 Day
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={2}>
                    2 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={3}>
                    3 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={4}>
                    4 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={"5"}>
                    5 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={6}>
                    6 Days
                  </MenuItem>
                  <MenuItem sx={dropDownStyle} value={7}>
                    7 Days
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          {/* Add a submit button here if needed */}
        </form>
      </Stack>
    </div>
  );
}

export default OrgSetupDetails;

const InputStyle1 = {
  textAlign: "left",
  fontWeight: "bold",
  fontFamily: "Open Sans",
  fontSize: "14px",
  color: "#5F6368",
  letterSpacing: "0px",
};

const BoxStyle1 = {
  borderRadius: "4px",
  border: "1px solid #DADCE0",
};

const dropDownStyle = {};

const TextFieldStyle = {
  border: "1px solid #DADCE0",
  bordeRradius: "4px",
  height: "45px",
};
