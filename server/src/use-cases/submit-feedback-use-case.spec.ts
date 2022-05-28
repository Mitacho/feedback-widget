import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("Should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "This is a comment",
        screenshot: "data:image/png;base64,screenshot.png",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("Should not be able to submit a feedback without a type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "This is a comment",
        screenshot: "data:image/png;base64,screenshot.png",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to submit a feedback without a comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,screenshot.png",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to submit a feedback with an invalid image format", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "This is a comment",
        screenshot: "screenshot.png",
      })
    ).rejects.toThrow();
  });
});
